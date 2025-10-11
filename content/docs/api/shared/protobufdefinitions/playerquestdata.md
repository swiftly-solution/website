---
title: PlayerQuestData
---

```csharp
public interface PlayerQuestData : ITypedProtobuf<PlayerQuestData>, INativeHandle
```

#### Implements

## Properties

### **ItemUpdates** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<MatchEndItemUpdates> ItemUpdates { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[MatchEndItemUpdates](/docs/api/shared/protobufdefinitions/matchenditemupdates)>

### **MmGameMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L25)

```csharp
uint MmGameMode { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **OperationPointsEligible** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L31)

```csharp
bool OperationPointsEligible { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **QuestItemData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<PlayerQuestData_QuestItemData> QuestItemData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[PlayerQuestData_QuestItemData](/docs/api/shared/protobufdefinitions/playerquestdata_questitemdata)>

### **QuesterAccountId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L13)

```csharp
uint QuesterAccountId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **TimePlayed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L22)

```csharp
uint TimePlayed { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Userstatchanges** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L34)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgCsgoSteamUserStatChange> Userstatchanges { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgCsgoSteamUserStatChange](/docs/api/shared/protobufdefinitions/cmsgcsgosteamuserstatchange)>

### **XpProgressData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<XpProgressData> XpProgressData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[XpProgressData](/docs/api/shared/protobufdefinitions/xpprogressdata)>

