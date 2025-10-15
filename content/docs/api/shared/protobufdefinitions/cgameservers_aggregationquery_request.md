---
title: CGameServers_AggregationQuery_Request
---

```csharp
public interface CGameServers_AggregationQuery_Request : ITypedProtobuf<CGameServers_AggregationQuery_Request>, INativeHandle
```

#### Implements

## Properties

### Filter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Request.cs#L13)

```csharp
string Filter { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GroupFields

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Request.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<string> GroupFields { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

