---
title: ScoreLeaderboardData_AccountEntries
---

```csharp
public interface ScoreLeaderboardData_AccountEntries : ITypedProtobuf<ScoreLeaderboardData_AccountEntries>, INativeHandle
```

#### Implements

## Properties

### **Accountid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData_AccountEntries.cs#L13)

```csharp
uint Accountid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Entries** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData_AccountEntries.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<ScoreLeaderboardData_Entry> Entries { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[ScoreLeaderboardData_Entry](/docs/api/shared/protobufdefinitions/scoreleaderboarddata_entry)>

