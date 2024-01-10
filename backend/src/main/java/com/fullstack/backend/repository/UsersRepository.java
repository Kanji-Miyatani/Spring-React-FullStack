package com.fullstack.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fullstack.backend.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    // 追加のクエリメソッドが必要になる場合はこちらに追加します。
}