---
title: CMsgGC_ServerQuestUpdateData
---

# Interface CMsgGC_ServerQuestUpdateData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGC_ServerQuestUpdateData : ITypedProtobuf<CMsgGC_ServerQuestUpdateData>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGC_ServerQuestUpdateData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BinaryData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L16)

```csharp
byte[] BinaryData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Flags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L25)

```csharp
uint Flags { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Missionlbsdata

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L22)

```csharp
ScoreLeaderboardData Missionlbsdata { get; }
```

#### Property Value

- [ScoreLeaderboardData](/docs/api/protobufdefinitions/scoreleaderboarddata)

### MmGameMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L19)

```csharp
uint MmGameMode { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PlayerQuestData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<PlayerQuestData> PlayerQuestData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[PlayerQuestData](/docs/api/protobufdefinitions/playerquestdata)>

