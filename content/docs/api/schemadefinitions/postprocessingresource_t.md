---
title: PostProcessingResource_t
---

# Interface PostProcessingResource_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface PostProcessingResource_t : ISchemaClass<PostProcessingResource_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<PostProcessingResource_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BloomParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L24)

```csharp
PostProcessingBloomParameters_t BloomParams { get; }
```

#### Property Value

- [PostProcessingBloomParameters_t](/docs/api/schemadefinitions/postprocessingbloomparameters_t)

### ColorCorrectionVolumeData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L36)

```csharp
ref CUtlBinaryBlock ColorCorrectionVolumeData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/natives/cutlbinaryblock)

### ColorCorrectionVolumeDim

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L34)

```csharp
ref int ColorCorrectionVolumeDim { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FogScatteringParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L42)

```csharp
PostProcessingFogScatteringParameters_t FogScatteringParams { get; }
```

#### Property Value

- [PostProcessingFogScatteringParameters_t](/docs/api/schemadefinitions/postprocessingfogscatteringparameters_t)

### HasBloomParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L22)

```csharp
ref bool HasBloomParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasColorCorrection

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L38)

```csharp
ref bool HasColorCorrection { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasFogScatteringParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L40)

```csharp
ref bool HasFogScatteringParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasLocalContrastParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L30)

```csharp
ref bool HasLocalContrastParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasTonemapParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L18)

```csharp
ref bool HasTonemapParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasVignetteParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L26)

```csharp
ref bool HasVignetteParams { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LocalConstrastParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L32)

```csharp
PostProcessingLocalContrastParameters_t LocalConstrastParams { get; }
```

#### Property Value

- [PostProcessingLocalContrastParameters_t](/docs/api/schemadefinitions/postprocessinglocalcontrastparameters_t)

### ToneMapParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L20)

```csharp
PostProcessingTonemapParameters_t ToneMapParams { get; }
```

#### Property Value

- [PostProcessingTonemapParameters_t](/docs/api/schemadefinitions/postprocessingtonemapparameters_t)

### VignetteParams

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/PostProcessingResource_t.cs#L28)

```csharp
PostProcessingVignetteParameters_t VignetteParams { get; }
```

#### Property Value

- [PostProcessingVignetteParameters_t](/docs/api/schemadefinitions/postprocessingvignetteparameters_t)

