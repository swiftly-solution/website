---
title: CNavLinkAreaEntity
---

```csharp
public interface CNavLinkAreaEntity : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CNavLinkAreaEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**AllowCrossMovableConnections** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L28)

```csharp
ref bool AllowCrossMovableConnections { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L26)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Filter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L32)

```csharp
ref CHandle<CBaseFilter> Filter { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseFilter](/docs/api/shared/schemadefinitions/cbasefilter)>

**IsTerminus** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L38)

```csharp
ref bool IsTerminus { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**LocatorAnglesOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L20)

```csharp
ref QAngle LocatorAnglesOffset { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**LocatorOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L18)

```csharp
ref Vector LocatorOffset { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**OnNavLinkFinish** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L36)

```csharp
CEntityIOOutput OnNavLinkFinish { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**OnNavLinkStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L34)

```csharp
CEntityIOOutput OnNavLinkStart { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**Splits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L40)

```csharp
ref int Splits { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**StrFilterName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L30)

```csharp
string StrFilterName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**StrMovementForward** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L22)

```csharp
string StrMovementForward { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**StrMovementReverse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L24)

```csharp
string StrMovementReverse { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Width** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNavLinkAreaEntity.cs#L16)

```csharp
ref float Width { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

