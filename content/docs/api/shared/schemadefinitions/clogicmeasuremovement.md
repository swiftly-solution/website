---
title: CLogicMeasureMovement
---

```csharp
public interface CLogicMeasureMovement : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicMeasureMovement>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**MeasureReference** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L24)

```csharp
ref CHandle<CBaseEntity> MeasureReference { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**MeasureTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L22)

```csharp
ref CHandle<CBaseEntity> MeasureTarget { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**MeasureType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L32)

```csharp
ref int MeasureType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L30)

```csharp
ref float Scale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**StrMeasureReference** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L18)

```csharp
ref CUtlSymbolLarge StrMeasureReference { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**StrMeasureTarget** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L16)

```csharp
ref CUtlSymbolLarge StrMeasureTarget { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**StrTargetReference** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L20)

```csharp
ref CUtlSymbolLarge StrTargetReference { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**Target** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L26)

```csharp
ref CHandle<CBaseEntity> Target { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

**TargetReference** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicMeasureMovement.cs#L28)

```csharp
ref CHandle<CBaseEntity> TargetReference { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

