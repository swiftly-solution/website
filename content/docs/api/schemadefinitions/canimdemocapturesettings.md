---
title: CAnimDemoCaptureSettings
---

# Interface CAnimDemoCaptureSettings

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CAnimDemoCaptureSettings : ISchemaClass<CAnimDemoCaptureSettings>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<CAnimDemoCaptureSettings>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BaseSequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L38)

```csharp
string BaseSequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### BaseSequenceFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L40)

```csharp
ref int BaseSequenceFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BoneSelectionMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L42)

```csharp
ref EDemoBoneSelectionMode BoneSelectionMode { get; }
```

#### Property Value

- [EDemoBoneSelectionMode](/docs/api/schemadefinitions/edemoboneselectionmode)

### Bones

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L44)

```csharp
ref CUtlVector<BoneDemoCaptureSettings_t> Bones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[BoneDemoCaptureSettings_t](/docs/api/schemadefinitions/bonedemocapturesettings_t)>

### ErrorRangeQuantizationRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L28)

```csharp
ref Vector2D ErrorRangeQuantizationRotation { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### ErrorRangeQuantizationScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L32)

```csharp
ref Vector2D ErrorRangeQuantizationScale { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### ErrorRangeQuantizationTranslation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L30)

```csharp
ref Vector2D ErrorRangeQuantizationTranslation { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### ErrorRangeSplineRotation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L18)

```csharp
ref Vector2D ErrorRangeSplineRotation { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### ErrorRangeSplineScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L22)

```csharp
ref Vector2D ErrorRangeSplineScale { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### ErrorRangeSplineTranslation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L20)

```csharp
ref Vector2D ErrorRangeSplineTranslation { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### IkChains

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L46)

```csharp
ref CUtlVector<IKDemoCaptureSettings_t> IkChains { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[IKDemoCaptureSettings_t](/docs/api/schemadefinitions/ikdemocapturesettings_t)>

### IkRotation_MaxQuantizationError

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L34)

```csharp
ref float IkRotation_MaxQuantizationError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IkRotation_MaxSplineError

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L24)

```csharp
ref float IkRotation_MaxSplineError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IkTranslation_MaxQuantizationError

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L36)

```csharp
ref float IkTranslation_MaxQuantizationError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### IkTranslation_MaxSplineError

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L26)

```csharp
ref float IkTranslation_MaxSplineError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

