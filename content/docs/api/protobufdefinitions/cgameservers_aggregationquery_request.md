---
title: CGameServers_AggregationQuery_Request
---

# Interface CGameServers_AggregationQuery_Request

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Request.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGameServers_AggregationQuery_Request : ITypedProtobuf<CGameServers_AggregationQuery_Request>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CGameServers_AggregationQuery_Request>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Filter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Request.cs#L13)

```csharp
string Filter { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### GroupFields

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Request.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<string> GroupFields { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

