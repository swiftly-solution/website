---
title: CAnimDemoCaptureSettings
---

```csharp
public interface CAnimDemoCaptureSettings : ISchemaClass<CAnimDemoCaptureSettings>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **BaseSequence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L36)

```csharp
string BaseSequence { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **BaseSequenceFrame** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L38)

```csharp
ref int BaseSequenceFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **BoneSelectionMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L40)

```csharp
ref EDemoBoneSelectionMode BoneSelectionMode { get; }
```

#### Property Value

- [EDemoBoneSelectionMode](/docs/api/shared/schemadefinitions/edemoboneselectionmode)

### **Bones** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L43)

```csharp
ref CUtlVector Bones { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **ErrorRangeQuantizationRotation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L26)

```csharp
ref Vector2D ErrorRangeQuantizationRotation { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### **ErrorRangeQuantizationScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L30)

```csharp
ref Vector2D ErrorRangeQuantizationScale { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### **ErrorRangeQuantizationTranslation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L28)

```csharp
ref Vector2D ErrorRangeQuantizationTranslation { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### **ErrorRangeSplineRotation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L16)

```csharp
ref Vector2D ErrorRangeSplineRotation { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### **ErrorRangeSplineScale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L20)

```csharp
ref Vector2D ErrorRangeSplineScale { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### **ErrorRangeSplineTranslation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L18)

```csharp
ref Vector2D ErrorRangeSplineTranslation { get; }
```

#### Property Value

- [Vector2D](/docs/api/shared/natives/vector2d)

### **IkChains** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L46)

```csharp
ref CUtlVector IkChains { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **IkRotation_MaxQuantizationError** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L32)

```csharp
ref float IkRotation_MaxQuantizationError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IkRotation_MaxSplineError** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L22)

```csharp
ref float IkRotation_MaxSplineError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IkTranslation_MaxQuantizationError** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L34)

```csharp
ref float IkTranslation_MaxQuantizationError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **IkTranslation_MaxSplineError** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimDemoCaptureSettings.cs#L24)

```csharp
ref float IkTranslation_MaxSplineError { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

