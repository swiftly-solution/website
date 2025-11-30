---
title: ScoreLeaderboardData_AccountEntries
---

# Interface ScoreLeaderboardData_AccountEntries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData_AccountEntries.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ScoreLeaderboardData_AccountEntries : ITypedProtobuf<ScoreLeaderboardData_AccountEntries>, INativeHandle
```

#### Implements

- [ITypedProtobuf<ScoreLeaderboardData_AccountEntries>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Accountid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData_AccountEntries.cs#L13)

```csharp
uint Accountid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Entries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData_AccountEntries.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<ScoreLeaderboardData_Entry> Entries { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[ScoreLeaderboardData_Entry](/docs/api/protobufdefinitions/scoreleaderboarddata_entry)>

