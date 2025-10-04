---
title: CEffectData
---

```csharp
public interface CEffectData : ISchemaClass<CEffectData>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Angles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L22)

```csharp
ref QAngle Angles { get; }
```

#### Property Value

- [QAngle](/docs/api/shared/natives/qangle)

**AttachmentIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L51)

```csharp
AttachmentHandle_t AttachmentIndex { get; }
```

#### Property Value

- [AttachmentHandle_t](/docs/api/shared/schemadefinitions/attachmenthandle_t)

**AttachmentName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L53)

```csharp
ref CUtlStringToken AttachmentName { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

**Color** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L47)

```csharp
ref byte Color { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**DamageType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L39)

```csharp
ref uint DamageType { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**EffectIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L37)

```csharp
SchemaUntypedField EffectIndex { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

**EffectName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L55)

```csharp
ref ushort EffectName { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**Entity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L24)

```csharp
ref CHandle<CEntityInstance> Entity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

**ExplosionType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L57)

```csharp
ref byte ExplosionType { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L49)

```csharp
ref byte Flags { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**HitBox** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L45)

```csharp
ref short HitBox { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**Magnitude** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L30)

```csharp
ref float Magnitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Material** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L43)

```csharp
ref ushort Material { get; }
```

#### Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

**Normal** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L20)

```csharp
ref Vector Normal { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**Origin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L16)

```csharp
ref Vector Origin { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**OtherEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L26)

```csharp
ref CHandle<CEntityInstance> OtherEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

**Penetrate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L41)

```csharp
ref byte Penetrate { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

**Radius** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L32)

```csharp
ref float Radius { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L28)

```csharp
ref float Scale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**Start** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L18)

```csharp
ref Vector Start { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

**SurfaceProp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L34)

```csharp
ref CUtlStringToken SurfaceProp { get; }
```

#### Property Value

- [CUtlStringToken](/docs/api/shared/natives/cutlstringtoken)

## Methods

**AnglesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L62)

```csharp
void AnglesUpdated()
```

**AttachmentIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L76)

```csharp
void AttachmentIndexUpdated()
```

**AttachmentNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L77)

```csharp
void AttachmentNameUpdated()
```

**ColorUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L74)

```csharp
void ColorUpdated()
```

**DamageTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L70)

```csharp
void DamageTypeUpdated()
```

**EffectIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L69)

```csharp
void EffectIndexUpdated()
```

**EffectNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L78)

```csharp
void EffectNameUpdated()
```

**EntityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L63)

```csharp
void EntityUpdated()
```

**ExplosionTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L79)

```csharp
void ExplosionTypeUpdated()
```

**FlagsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L75)

```csharp
void FlagsUpdated()
```

**HitBoxUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L73)

```csharp
void HitBoxUpdated()
```

**MagnitudeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L66)

```csharp
void MagnitudeUpdated()
```

**MaterialUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L72)

```csharp
void MaterialUpdated()
```

**NormalUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L61)

```csharp
void NormalUpdated()
```

**OriginUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L59)

```csharp
void OriginUpdated()
```

**OtherEntityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L64)

```csharp
void OtherEntityUpdated()
```

**PenetrateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L71)

```csharp
void PenetrateUpdated()
```

**RadiusUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L67)

```csharp
void RadiusUpdated()
```

**ScaleUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L65)

```csharp
void ScaleUpdated()
```

**StartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L60)

```csharp
void StartUpdated()
```

**SurfacePropUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEffectData.cs#L68)

```csharp
void SurfacePropUpdated()
```

