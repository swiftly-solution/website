---
title: ScoreLeaderboardData
---

# Interface ScoreLeaderboardData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ScoreLeaderboardData : ITypedProtobuf<ScoreLeaderboardData>, INativeHandle
```

#### Implements

- [ITypedProtobuf<ScoreLeaderboardData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Accountentries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<ScoreLeaderboardData_AccountEntries> Accountentries { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[ScoreLeaderboardData_AccountEntries](/docs/api/protobufdefinitions/scoreleaderboarddata_accountentries)>

### LeaderboardName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L25)

```csharp
string LeaderboardName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Matchentries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<ScoreLeaderboardData_Entry> Matchentries { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[ScoreLeaderboardData_Entry](/docs/api/protobufdefinitions/scoreleaderboarddata_entry)>

### QuestId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L13)

```csharp
ulong QuestId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### Score

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L16)

```csharp
uint Score { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

