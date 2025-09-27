---
title: CPreMatchInfoData
---

```csharp
public interface CPreMatchInfoData : ITypedProtobuf<CPreMatchInfoData>, INativeHandle
```

#### Implements

## Properties

**Draft** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L16)

```csharp
CDataGCCStrike15_v2_TournamentMatchDraft Draft { get; }
```

#### Property Value

- [CDataGCCStrike15_v2_TournamentMatchDraft](/docs/api/shared/protobufdefinitions/cdatagccstrike15_v2_tournamentmatchdraft)

**PredictionsPct** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L13)

```csharp
int PredictionsPct { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Stats** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CPreMatchInfoData_TeamStats> Stats { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CPreMatchInfoData_TeamStats](/docs/api/shared/protobufdefinitions/cprematchinfodata_teamstats)>

**Wins** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CPreMatchInfoData.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<int> Wins { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

