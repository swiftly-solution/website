---
title: CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends
---

# Interface CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends : ITypedProtobuf<CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountIds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<uint> AccountIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ClientLauncher

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L25)

```csharp
uint ClientLauncher { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DataCenterPings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<DataCenterPing> DataCenterPings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[DataCenterPing](/docs/api/protobufdefinitions/datacenterping)>

### Matchid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L22)

```csharp
ulong Matchid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### RequestId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L13)

```csharp
uint RequestId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Serverid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L19)

```csharp
ulong Serverid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

