<?php

namespace Topxia\Service\System\Dao\Impl;

use Topxia\Service\Common\BaseDao;
use Topxia\Service\System\Dao\CacheDao;

class CacheDaoImpl extends BaseDao implements CacheDao
{
    protected $table = 'cache';

    public function getCache($id)
    {
        $that = $this;

        return $this->fetchCached("id:{$id}", $id, function ($id) use ($that) {
            $sql = "SELECT * FROM {$that->getTable()} WHERE id = ? LIMIT 1";
            return $that->getConnection()->fetchAssoc($sql, array($id));
        });
    }

    public function addCache($cache)
    {
        $affected = $this->getConnection()->insert($this->table, $cache);
        if ($affected <= 0) {
            throw $this->createDaoException('Insert cache error.');
        }
        $this->clearCached();
        return $this->getCache($this->getConnection()->lastInsertId());
    }

    public function findCachesByNames(array $names)
    {
        $keys = implode(':',$names);

        $that = $this;

        return $this->fetchCached("names:{$keys}", $names, function ($names) use ($that) {
            if(empty($names)){
                return array();
            }
            $marks = str_repeat('?,', count($names) - 1) . '?';
            $sql ="SELECT * FROM {$that->getTable()} WHERE name IN ({$marks});";
            return $that->getConnection()->fetchAll($sql, $names);
        });
    }

    public function deleteCacheByName($name)
    {
        $result = $this->getConnection()->delete($this->table, array('name' => $name));
        $this->clearCached();
        return $result;
    }

    public function deleteAllCache()
    {
        $sql = "DELETE FROM {$this->table}";
        $result = $this->getConnection()->executeUpdate($sql, array());
        $this->clearCached();
        return $result;
    }
}