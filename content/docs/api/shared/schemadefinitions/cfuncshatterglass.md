---
title: CFuncShatterglass
---

```csharp
public interface CFuncShatterglass : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncShatterglass>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**BreakShardless** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L36)

```csharp
ref bool BreakShardless { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**BreakSilent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L34)

```csharp
ref bool BreakSilent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**Broken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L38)

```csharp
ref bool Broken { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**DamagePositioningEntityName01** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L48)

```csharp
ref CUtlSymbolLarge DamagePositioningEntityName01 { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**DamagePositioningEntityName02** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L50)

```csharp
ref CUtlSymbolLarge DamagePositioningEntityName02 { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**DamagePositioningEntityName03** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L52)

```csharp
ref CUtlSymbolLarge DamagePositioningEntityName03 { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**DamagePositioningEntityName04** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L54)

```csharp
ref CUtlSymbolLarge DamagePositioningEntityName04 { get; }
```

#### Property Value

- [CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)

**ExtraDamagePositions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L58)

```csharp
ref CUtlVector<Vector> ExtraDamagePositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[Vector](/docs/api/shared/natives/vector)>

**GlassInFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L42)

```csharp
ref bool GlassInFrame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**GlassNavIgnore** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L40)

```csharp
ref bool GlassNavIgnore { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**GlassThickness** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L30)

```csharp
ref float GlassThickness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**InitAtTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L28)

```csharp
GameTime_t InitAtTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**InitialDamagePositions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L56)

```csharp
ref CUtlVector<Vector> InitialDamagePositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[Vector](/docs/api/shared/natives/vector)>

**InitialDamageType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L46)

```csharp
ref byte InitialDamageType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**InitialPanelVertices** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L60)

```csharp
ref CUtlVector<Vector4D> InitialPanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[Vector4D](/docs/api/shared/natives/vector4d)>

**LastCleanupTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L26)

```csharp
GameTime_t LastCleanupTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**LastShatterSoundEmitTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L24)

```csharp
GameTime_t LastShatterSoundEmitTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

**MatPanelTransform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L16)

```csharp
ref matrix3x4_t MatPanelTransform { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

**MatPanelTransformWsTemp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L18)

```csharp
ref matrix3x4_t MatPanelTransformWsTemp { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

**MaterialDamageBase** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L66)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> MaterialDamageBase { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

**OnBroken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L62)

```csharp
CEntityIOOutput OnBroken { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

**PanelSize** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L22)

```csharp
ref Vector2D PanelSize { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

**ShatterGlassShards** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L20)

```csharp
ref CUtlVector<uint> ShatterGlassShards { get; }
```

#### Property Value

- [CUtlVector](/docs/api/shared/natives/cutlvector-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**SpawnInvulnerability** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L32)

```csharp
ref float SpawnInvulnerability { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**StartBroken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L44)

```csharp
ref bool StartBroken { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SurfaceType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L64)

```csharp
ref byte SurfaceType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

