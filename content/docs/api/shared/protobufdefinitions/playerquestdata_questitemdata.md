---
title: PlayerQuestData_QuestItemData
---

```csharp
public interface PlayerQuestData_QuestItemData : ITypedProtobuf<PlayerQuestData_QuestItemData>, INativeHandle
```

#### Implements

## Properties

### QuestBonusPointsEarned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L19)

```csharp
int QuestBonusPointsEarned { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QuestId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L13)

```csharp
ulong QuestId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### QuestNormalPointsEarned

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L16)

```csharp
int QuestNormalPointsEarned { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QuestNormalPointsRequired

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<int> QuestNormalPointsRequired { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### QuestPeriod

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L28)

```csharp
int QuestPeriod { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QuestRewardXp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L25)

```csharp
IProtobufRepeatedFieldValueType<int> QuestRewardXp { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### QuestType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/PlayerQuestData_QuestItemData.cs#L31)

```csharp
QuestType QuestType { get; set; }
```

#### Property Value

- [QuestType](/docs/api/shared/protobufdefinitions/questtype)

