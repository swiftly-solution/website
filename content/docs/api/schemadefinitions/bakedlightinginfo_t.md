---
title: BakedLightingInfo_t
---

# Interface BakedLightingInfo_t

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface BakedLightingInfo_t : ISchemaClass<BakedLightingInfo_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [ISchemaClass<BakedLightingInfo_t>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BakedShadows

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L38)

```csharp
ref CUtlVector<BakedLightingInfo_t__BakedShadowAssignment_t> BakedShadows { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[BakedLightingInfo_t__BakedShadowAssignment_t](/docs/api/schemadefinitions/bakedlightinginfo_t__bakedshadowassignment_t)>

### BakedShadowsGamma20

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L26)

```csharp
ref bool BakedShadowsGamma20 { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChartPackIterations

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L32)

```csharp
ref byte ChartPackIterations { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### CompressionEnabled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L28)

```csharp
ref bool CompressionEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### HasLightmaps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L24)

```csharp
ref bool HasLightmaps { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LightMaps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L36)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCTextureBase>> LightMaps { get; }
```

#### Property Value

- [CUtlVector](/docs/api/natives/cutlvectort)<[CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCTextureBase](/docs/api/schemadefinitions/infoforresourcetypectexturebase)>>

### LightmapGameVersionNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L20)

```csharp
ref uint LightmapGameVersionNumber { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LightmapUvScale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L22)

```csharp
ref Vector2D LightmapUvScale { get; }
```

#### Property Value

- [Vector2D](/docs/api/natives/vector2d)

### LightmapVersionNumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L18)

```csharp
ref uint LightmapVersionNumber { get; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SHLightmaps

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L30)

```csharp
ref bool SHLightmaps { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VradQuality

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/BakedLightingInfo_t.cs#L34)

```csharp
ref byte VradQuality { get; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)

