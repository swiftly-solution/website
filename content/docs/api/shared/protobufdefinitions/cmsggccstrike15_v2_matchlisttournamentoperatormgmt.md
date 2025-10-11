---
title: CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt
---

```csharp
public interface CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt : ITypedProtobuf<CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt>, INativeHandle
```

#### Implements

## Properties

### **Accountid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt.cs#L19)

```csharp
uint Accountid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Eventid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt.cs#L13)

```csharp
int Eventid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Matches** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_MatchInfo> Matches { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CDataGCCStrike15_v2_MatchInfo](/docs/api/shared/protobufdefinitions/cdatagccstrike15_v2_matchinfo)>

