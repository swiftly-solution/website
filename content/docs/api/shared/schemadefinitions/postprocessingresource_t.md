---
title: PostProcessingResource_t
---

```csharp
public interface PostProcessingResource_t : ISchemaClass<PostProcessingResource_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BloomParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L24)

```csharp
PostProcessingBloomParameters_t BloomParams { get; }
```

#### Property Value

- [PostProcessingBloomParameters_t](/docs/api/shared/schemadefinitions/postprocessingbloomparameters_t)

### ColorCorrectionVolumeData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L36)

```csharp
ref CUtlBinaryBlock ColorCorrectionVolumeData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)

### ColorCorrectionVolumeDim

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L34)

```csharp
ref int ColorCorrectionVolumeDim { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FogScatteringParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L42)

```csharp
PostProcessingFogScatteringParameters_t FogScatteringParams { get; }
```

#### Property Value

- [PostProcessingFogScatteringParameters_t](/docs/api/shared/schemadefinitions/postprocessingfogscatteringparameters_t)

### HasBloomParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L22)

```csharp
ref bool HasBloomParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasColorCorrection

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L38)

```csharp
ref bool HasColorCorrection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasFogScatteringParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L40)

```csharp
ref bool HasFogScatteringParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasLocalContrastParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L30)

```csharp
ref bool HasLocalContrastParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasTonemapParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L18)

```csharp
ref bool HasTonemapParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasVignetteParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L26)

```csharp
ref bool HasVignetteParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LocalConstrastParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L32)

```csharp
PostProcessingLocalContrastParameters_t LocalConstrastParams { get; }
```

#### Property Value

- [PostProcessingLocalContrastParameters_t](/docs/api/shared/schemadefinitions/postprocessinglocalcontrastparameters_t)

### ToneMapParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L20)

```csharp
PostProcessingTonemapParameters_t ToneMapParams { get; }
```

#### Property Value

- [PostProcessingTonemapParameters_t](/docs/api/shared/schemadefinitions/postprocessingtonemapparameters_t)

### VignetteParams

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L28)

```csharp
PostProcessingVignetteParameters_t VignetteParams { get; }
```

#### Property Value

- [PostProcessingVignetteParameters_t](/docs/api/shared/schemadefinitions/postprocessingvignetteparameters_t)

