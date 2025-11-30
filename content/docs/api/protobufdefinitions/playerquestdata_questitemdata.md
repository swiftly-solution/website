---
title: PlayerQuestData_QuestItemData
---

# Interface PlayerQuestData_QuestItemData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PlayerQuestData_QuestItemData : ITypedProtobuf<PlayerQuestData_QuestItemData>, INativeHandle
```

#### Implements

- [ITypedProtobuf<PlayerQuestData_QuestItemData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### QuestBonusPointsEarned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L19)

```csharp
int QuestBonusPointsEarned { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QuestId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L13)

```csharp
ulong QuestId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### QuestNormalPointsEarned

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L16)

```csharp
int QuestNormalPointsEarned { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QuestNormalPointsRequired

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<int> QuestNormalPointsRequired { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### QuestPeriod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L28)

```csharp
int QuestPeriod { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QuestRewardXp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L25)

```csharp
IProtobufRepeatedFieldValueType<int> QuestRewardXp { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### QuestType

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L31)

```csharp
QuestType QuestType { get; set; }
```

#### Property Value

- [QuestType](/docs/api/protobufdefinitions/questtype)

