---
title: CNETMsg_SpawnGroup_Load
---

```csharp
public interface CNETMsg_SpawnGroup_Load : ITypedProtobuf<CNETMsg_SpawnGroup_Load>, INativeHandle, INetMessage<CNETMsg_SpawnGroup_Load>, IDisposable
```

#### Implements

## Properties

**Creationsequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L63)

```csharp
uint Creationsequence { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Entityfiltername** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L24)

```csharp
string Entityfiltername { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Entitylumpname** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L21)

```csharp
string Entitylumpname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L42)

```csharp
uint Flags { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Leveltransition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L72)

```csharp
bool Leveltransition { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Localnamefixup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L51)

```csharp
string Localnamefixup { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Manifestincomplete** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L48)

```csharp
bool Manifestincomplete { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Manifestloadpriority** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L57)

```csharp
int Manifestloadpriority { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Parentnamefixup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L54)

```csharp
string Parentnamefixup { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Savegamefilename** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L66)

```csharp
string Savegamefilename { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Spawngrouphandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L27)

```csharp
uint Spawngrouphandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Spawngroupmanifest** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L39)

```csharp
byte[] Spawngroupmanifest { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

**Spawngroupownerhandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L30)

```csharp
uint Spawngroupownerhandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Spawngroupparenthandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L69)

```csharp
uint Spawngroupparenthandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Tickcount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L45)

```csharp
int Tickcount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**WorldOffsetAngle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L36)

```csharp
QAngle WorldOffsetAngle { get; set; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**WorldOffsetPos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L33)

```csharp
Vector WorldOffsetPos { get; set; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Worldgroupid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L60)

```csharp
uint Worldgroupid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Worldgroupname** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L75)

```csharp
string Worldgroupname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Worldname** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CNETMsg_SpawnGroup_Load.cs#L18)

```csharp
string Worldname { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

