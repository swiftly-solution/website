---
title: CGameServers_AggregationQuery_Response_Group
---

# Interface CGameServers_AggregationQuery_Response_Group

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CGameServers_AggregationQuery_Response_Group : ITypedProtobuf<CGameServers_AggregationQuery_Response_Group>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CGameServers_AggregationQuery_Response_Group>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### GroupValues

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L13)

```csharp
IProtobufRepeatedFieldValueType<string> GroupValues { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[string](https://learn.microsoft.com/dotnet/api/system.string)>

### PlayerCapacity

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L31)

```csharp
uint PlayerCapacity { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayersBots

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L28)

```csharp
uint PlayersBots { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayersHumans

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L25)

```csharp
uint PlayersHumans { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ServersEmpty

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L16)

```csharp
uint ServersEmpty { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ServersFull

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L19)

```csharp
uint ServersFull { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### ServersTotal

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameServers_AggregationQuery_Response_Group.cs#L22)

```csharp
uint ServersTotal { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

