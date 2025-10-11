---
title: CDataGCCStrike15_v2_TournamentGroup
---

```csharp
public interface CDataGCCStrike15_v2_TournamentGroup : ITypedProtobuf<CDataGCCStrike15_v2_TournamentGroup>, INativeHandle
```

#### Implements

## Properties

### **Desc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L19)

```csharp
string Desc { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Groupid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L13)

```csharp
uint Groupid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Pickableteams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L34)

```csharp
uint Pickableteams { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Picklockuntiltime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L31)

```csharp
uint Picklockuntiltime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Picks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L40)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_TournamentGroup_Picks> Picks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CDataGCCStrike15_v2_TournamentGroup_Picks](/docs/api/shared/protobufdefinitions/cdatagccstrike15_v2_tournamentgroup_picks)>

### **PicksDeprecated** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L22)

```csharp
uint PicksDeprecated { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **PointsPerPick** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L37)

```csharp
uint PointsPerPick { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **StageIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L28)

```csharp
IProtobufRepeatedFieldValueType<int> StageIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **Teams** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CDataGCCStrike15_v2_TournamentGroup.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<CDataGCCStrike15_v2_TournamentGroupTeam> Teams { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CDataGCCStrike15_v2_TournamentGroupTeam](/docs/api/shared/protobufdefinitions/cdatagccstrike15_v2_tournamentgroupteam)>

