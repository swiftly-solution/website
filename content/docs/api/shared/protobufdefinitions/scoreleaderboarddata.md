---
title: ScoreLeaderboardData
---

```csharp
public interface ScoreLeaderboardData : ITypedProtobuf<ScoreLeaderboardData>, INativeHandle
```

- Implements

## Properties

### **Accountentries** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<ScoreLeaderboardData_AccountEntries> Accountentries { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[ScoreLeaderboardData_AccountEntries](/docs/api/shared/protobufdefinitions/scoreleaderboarddata_accountentries)>

### **LeaderboardName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L25)

```csharp
string LeaderboardName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Matchentries** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<ScoreLeaderboardData_Entry> Matchentries { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[ScoreLeaderboardData_Entry](/docs/api/shared/protobufdefinitions/scoreleaderboarddata_entry)>

### **QuestId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L13)

```csharp
ulong QuestId { get; set; }
```

- Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **Score** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/ScoreLeaderboardData.cs#L16)

```csharp
uint Score { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

