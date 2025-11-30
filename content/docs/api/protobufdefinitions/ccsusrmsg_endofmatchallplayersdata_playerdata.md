---
title: CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData
---

# Interface CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData : ITypedProtobuf<CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Isbot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L34)

```csharp
bool Isbot { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Items

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CEconItemPreviewDataBlock> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CEconItemPreviewDataBlock](/docs/api/protobufdefinitions/ceconitempreviewdatablock)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L19)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Nomination

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L25)

```csharp
CCSUsrMsg_EndOfMatchAllPlayersData_Accolade Nomination { get; }
```

#### Property Value

- [CCSUsrMsg_EndOfMatchAllPlayersData_Accolade](/docs/api/protobufdefinitions/ccsusrmsg_endofmatchallplayersdata_accolade)

### Playercolor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L31)

```csharp
int Playercolor { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Slot

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L13)

```csharp
int Slot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Teamnumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L22)

```csharp
int Teamnumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Xuid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L16)

```csharp
ulong Xuid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

