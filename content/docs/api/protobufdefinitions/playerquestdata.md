---
title: PlayerQuestData
---

# Interface PlayerQuestData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PlayerQuestData : ITypedProtobuf<PlayerQuestData>, INativeHandle
```

#### Implements

- [ITypedProtobuf<PlayerQuestData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ItemUpdates

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<MatchEndItemUpdates> ItemUpdates { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[MatchEndItemUpdates](/docs/api/protobufdefinitions/matchenditemupdates)>

### MmGameMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L25)

```csharp
uint MmGameMode { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### OperationPointsEligible

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L31)

```csharp
bool OperationPointsEligible { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### QuestItemData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<PlayerQuestData_QuestItemData> QuestItemData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[PlayerQuestData_QuestItemData](/docs/api/protobufdefinitions/playerquestdata_questitemdata)>

### QuesterAccountId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L13)

```csharp
uint QuesterAccountId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TimePlayed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L22)

```csharp
uint TimePlayed { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Userstatchanges

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L34)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgCsgoSteamUserStatChange> Userstatchanges { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgCsgoSteamUserStatChange](/docs/api/protobufdefinitions/cmsgcsgosteamuserstatchange)>

### XpProgressData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<XpProgressData> XpProgressData { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[XpProgressData](/docs/api/protobufdefinitions/xpprogressdata)>

