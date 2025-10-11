---
title: CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends
---

```csharp
public interface CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends : ITypedProtobuf<CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends>, INativeHandle
```

#### Implements

## Properties

### **AccountIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<uint> AccountIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **ClientLauncher** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L25)

```csharp
uint ClientLauncher { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **DataCenterPings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<DataCenterPing> DataCenterPings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[DataCenterPing](/docs/api/shared/protobufdefinitions/datacenterping)>

### **Matchid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L22)

```csharp
ulong Matchid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **RequestId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L13)

```csharp
uint RequestId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Serverid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends.cs#L19)

```csharp
ulong Serverid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

