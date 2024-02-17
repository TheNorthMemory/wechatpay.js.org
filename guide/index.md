---
title: 指南
---

本类库是把 `URL.pathname` 以`/`做切分，取出 `segments` 映射成实例对象属性，同时支持`APIv2`的实例对象属性映射，编码书写方式有如下约定：

1. 请求 `segments` 按照顺序作为级联对象，例如 `v3/pay/transactions/native` 即链接成 `v3.pay.transactions.native`;
2. 每个 `segments` 所支持的 `HTTP METHOD`，即作为 请求对象的末尾执行方法，例如: `v3.pay.transactions.native.post({})`;
3. 每个 `segments` 级联对象默认为HTTP`POST`方法，其同时隐式内置`GET/POST/PUT/PATCH/DELETE` 方法链，小写`verb`格式，说明见`变更历史`;
4. 每个 `segments` 有中线(dash)分隔符的，可以使用驼峰`camelCase`风格书写，例如: `merchant-service`可写成 `merchantService`，或者字面量属性，如 `v3['merchant-service']`;
5. 每个 `segments` 中，若有动态参数，例如 `business_code/{business_code}` 可写成 `business_code.$business_code$` 或者字面量属性风格，如 `business_code['{business_code}']`;
6. 如果 `segments` 以 `v2` 开始，其特殊标识为`APIv2`级联对象开始位，之后串接其他`segments`，如源 `pay/micropay` 即串接成 `v2.pay.micropay` 即以XML形式请求远端接口；

[快速开始](/guide/getting-started)及[开放接口](/openapi/)示例用法，均以`Promise`或`Async/Await`结合此种编码模式展开。
