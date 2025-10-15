---
title: CFuncShatterglass
---

```csharp
public interface CFuncShatterglass : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CFuncShatterglass>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BreakShardless

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L37)

```csharp
ref bool BreakShardless { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### BreakSilent

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L35)

```csharp
ref bool BreakSilent { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Broken

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L39)

```csharp
ref bool Broken { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DamagePositioningEntityName01

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L49)

```csharp
string DamagePositioningEntityName01 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DamagePositioningEntityName02

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L51)

```csharp
string DamagePositioningEntityName02 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DamagePositioningEntityName03

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L53)

```csharp
string DamagePositioningEntityName03 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### DamagePositioningEntityName04

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L55)

```csharp
string DamagePositioningEntityName04 { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExtraDamagePositions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L59)

```csharp
ref CUtlVector<Vector> ExtraDamagePositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### GlassInFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L43)

```csharp
ref bool GlassInFrame { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GlassNavIgnore

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L41)

```csharp
ref bool GlassNavIgnore { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GlassThickness

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L31)

```csharp
ref float GlassThickness { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### InitAtTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L29)

```csharp
GameTime_t InitAtTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### InitialDamagePositions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L57)

```csharp
ref CUtlVector<Vector> InitialDamagePositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### InitialDamageType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L47)

```csharp
ref byte InitialDamageType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### InitialPanelVertices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L61)

```csharp
ref CUtlVector<Vector4D> InitialPanelVertices { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector4D](/docs/api/shared/natives/vector4d)>

### LastCleanupTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L27)

```csharp
GameTime_t LastCleanupTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastShatterSoundEmitTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L25)

```csharp
GameTime_t LastShatterSoundEmitTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### MatPanelTransform

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L17)

```csharp
ref matrix3x4_t MatPanelTransform { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

### MatPanelTransformWsTemp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L19)

```csharp
ref matrix3x4_t MatPanelTransformWsTemp { get; }
```

#### Property Value

- [matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)

### MaterialDamageBase

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L67)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> MaterialDamageBase { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### OnBroken

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L63)

```csharp
CEntityIOOutput OnBroken { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### PanelSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L23)

```csharp
ref Vector2D PanelSize { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### ShatterGlassShards

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L21)

```csharp
ref CUtlVector<uint> ShatterGlassShards { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### SpawnInvulnerability

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L33)

```csharp
ref float SpawnInvulnerability { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartBroken

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L45)

```csharp
ref bool StartBroken { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SurfaceType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CFuncShatterglass.cs#L65)

```csharp
ref byte SurfaceType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

