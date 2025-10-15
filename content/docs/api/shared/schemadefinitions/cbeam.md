---
title: CBeam
---

```csharp
public interface CBeam : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBeam>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Amplitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L48)

```csharp
ref float Amplitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AttachEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L35)

```csharp
ISchemaFixedArray<CHandle<CBaseEntity>> AttachEntity { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

### AttachIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L38)

```csharp
SchemaUntypedField AttachIndex { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### BaseMaterial

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L27)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> BaseMaterial { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### BeamFlags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L33)

```csharp
ref uint BeamFlags { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### BeamType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L31)

```csharp
ref BeamType_t BeamType { get; }
```

#### Property Value

- [BeamType_t](/docs/api/shared/schemadefinitions/beamtype_t)

### ClipStyle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L56)

```csharp
ref BeamClipStyle_t ClipStyle { get; }
```

#### Property Value

- [BeamClipStyle_t](/docs/api/shared/schemadefinitions/beamclipstyle_t)

### Damage

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L23)

```csharp
ref float Damage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### DissolveType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L64)

```csharp
ref int DissolveType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EndEntity

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L62)

```csharp
ref CHandle<CBaseEntity> EndEntity { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>

### EndPos

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L60)

```csharp
ref Vector EndPos { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### EndWidth

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L42)

```csharp
ref float EndWidth { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L44)

```csharp
ref float FadeLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FireTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L21)

```csharp
GameTime_t FireTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### Frame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L54)

```csharp
ref float Frame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FrameRate

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L17)

```csharp
ref float FrameRate { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HDRColorScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L19)

```csharp
ref float HDRColorScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### HaloIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L29)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> HaloIndex { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### HaloScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L46)

```csharp
ref float HaloScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NumBeamEnts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L25)

```csharp
ref byte NumBeamEnts { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### Speed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L52)

```csharp
ref float Speed { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### StartFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L50)

```csharp
ref float StartFrame { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### TurnedOff

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L58)

```csharp
ref bool TurnedOff { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Width

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L40)

```csharp
ref float Width { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### AmplitudeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L79)

```csharp
void AmplitudeUpdated()
```

### AttachEntityUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L73)

```csharp
void AttachEntityUpdated()
```

### AttachIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L74)

```csharp
void AttachIndexUpdated()
```

### BaseMaterialUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L69)

```csharp
void BaseMaterialUpdated()
```

### BeamFlagsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L72)

```csharp
void BeamFlagsUpdated()
```

### BeamTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L71)

```csharp
void BeamTypeUpdated()
```

### ClipStyleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L83)

```csharp
void ClipStyleUpdated()
```

### EndPosUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L85)

```csharp
void EndPosUpdated()
```

### EndWidthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L76)

```csharp
void EndWidthUpdated()
```

### FadeLengthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L77)

```csharp
void FadeLengthUpdated()
```

### FrameRateUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L66)

```csharp
void FrameRateUpdated()
```

### FrameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L82)

```csharp
void FrameUpdated()
```

### HDRColorScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L67)

```csharp
void HDRColorScaleUpdated()
```

### HaloIndexUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L70)

```csharp
void HaloIndexUpdated()
```

### HaloScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L78)

```csharp
void HaloScaleUpdated()
```

### NumBeamEntsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L68)

```csharp
void NumBeamEntsUpdated()
```

### SpeedUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L81)

```csharp
void SpeedUpdated()
```

### StartFrameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L80)

```csharp
void StartFrameUpdated()
```

### TurnedOffUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L84)

```csharp
void TurnedOffUpdated()
```

### WidthUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CBeam.cs#L75)

```csharp
void WidthUpdated()
```

