---
title: CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData
---

```csharp
public interface CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData : ITypedProtobuf<CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData>, INativeHandle
```

#### Implements

## Properties

**Isbot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L34)

```csharp
bool Isbot { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Items** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CEconItemPreviewDataBlock> Items { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CEconItemPreviewDataBlock](/docs/api/shared/protobufdefinitions/ceconitempreviewdatablock)>

**Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L19)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Nomination** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L25)

```csharp
CCSUsrMsg_EndOfMatchAllPlayersData_Accolade Nomination { get; }
```

#### Property Value

- [CCSUsrMsg_EndOfMatchAllPlayersData_Accolade](/docs/api/shared/protobufdefinitions/ccsusrmsg_endofmatchallplayersdata_accolade)

**Playercolor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L31)

```csharp
int Playercolor { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Slot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L13)

```csharp
int Slot { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Teamnumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L22)

```csharp
int Teamnumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Xuid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_EndOfMatchAllPlayersData_PlayerData.cs#L16)

```csharp
ulong Xuid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

