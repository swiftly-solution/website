---
title: CMsgGCCStrike15_v2_MatchmakingClient2ServerPing
---

```csharp
public interface CMsgGCCStrike15_v2_MatchmakingClient2ServerPing : ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingClient2ServerPing>, INativeHandle
```

#### Implements

## Properties

### **DataCenterPings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<DataCenterPing> DataCenterPings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[DataCenterPing](/docs/api/shared/protobufdefinitions/datacenterping)>

### **DebugMessage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L37)

```csharp
string DebugMessage { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **FinalBatch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L19)

```csharp
int FinalBatch { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Gameserverpings** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<GameServerPing> Gameserverpings { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[GameServerPing](/docs/api/shared/protobufdefinitions/gameserverping)>

### **MaxPing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L25)

```csharp
uint MaxPing { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Notes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L34)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note> Notes { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2clientupdate_note)>

### **OffsetIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L16)

```csharp
int OffsetIndex { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SearchKey** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L31)

```csharp
byte[] SearchKey { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **TestToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingClient2ServerPing.cs#L28)

```csharp
uint TestToken { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

