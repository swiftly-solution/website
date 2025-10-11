---
title: CMsgGC_ServerQuestUpdateData
---

```csharp
public interface CMsgGC_ServerQuestUpdateData : ITypedProtobuf<CMsgGC_ServerQuestUpdateData>, INativeHandle
```

#### Implements

## Properties

### **BinaryData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L16)

```csharp
byte[] BinaryData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L25)

```csharp
uint Flags { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Missionlbsdata** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L22)

```csharp
ScoreLeaderboardData Missionlbsdata { get; }
```

#### Property Value

- [ScoreLeaderboardData](/docs/api/shared/protobufdefinitions/scoreleaderboarddata)

### **MmGameMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L19)

```csharp
uint MmGameMode { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **PlayerQuestData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGC_ServerQuestUpdateData.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<PlayerQuestData> PlayerQuestData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[PlayerQuestData](/docs/api/shared/protobufdefinitions/playerquestdata)>

