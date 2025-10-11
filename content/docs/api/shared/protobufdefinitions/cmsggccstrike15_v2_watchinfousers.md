---
title: CMsgGCCStrike15_v2_WatchInfoUsers
---

```csharp
public interface CMsgGCCStrike15_v2_WatchInfoUsers : ITypedProtobuf<CMsgGCCStrike15_v2_WatchInfoUsers>, INativeHandle
```

#### Implements

## Properties

### **AccountIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_WatchInfoUsers.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<uint> AccountIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **ExtendedTimeout** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_WatchInfoUsers.cs#L22)

```csharp
uint ExtendedTimeout { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **RequestId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_WatchInfoUsers.cs#L13)

```csharp
uint RequestId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **WatchableMatchInfos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_WatchInfoUsers.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<WatchableMatchInfo> WatchableMatchInfos { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[WatchableMatchInfo](/docs/api/shared/protobufdefinitions/watchablematchinfo)>

