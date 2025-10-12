---
title: CEnvCubemapFog
---

```csharp
public interface CEnvCubemapFog : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CEnvCubemapFog>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Active** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L34)

```csharp
ref bool Active { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **CubemapSourceType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L40)

```csharp
ref int CubemapSourceType { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **EndDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L16)

```csharp
ref float EndDistance { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FirstTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L50)

```csharp
ref bool FirstTime { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **FogCubemapTexture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L46)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> FogCubemapTexture { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### **FogFalloffExponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L20)

```csharp
ref float FogFalloffExponent { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogHeightEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L26)

```csharp
ref float FogHeightEnd { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogHeightExponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L30)

```csharp
ref float FogHeightExponent { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogHeightStart** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L28)

```csharp
ref float FogHeightStart { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogHeightWidth** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L24)

```csharp
ref float FogHeightWidth { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogMaxOpacity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L38)

```csharp
ref float FogMaxOpacity { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **HasHeightFogEnd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L48)

```csharp
ref bool HasHeightFogEnd { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HeightFogEnabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L22)

```csharp
ref bool HeightFogEnabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LODBias** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L32)

```csharp
ref float LODBias { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **SkyEntity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L44)

```csharp
string SkyEntity { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **SkyMaterial** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L42)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SkyMaterial { get; }
```

- Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### **StartDisabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L36)

```csharp
ref bool StartDisabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **StartDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L18)

```csharp
ref float StartDistance { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### **ActiveUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L61)

```csharp
void ActiveUpdated()
```

### **CubemapSourceTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L64)

```csharp
void CubemapSourceTypeUpdated()
```

### **EndDistanceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L52)

```csharp
void EndDistanceUpdated()
```

### **FogCubemapTextureUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L67)

```csharp
void FogCubemapTextureUpdated()
```

### **FogFalloffExponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L54)

```csharp
void FogFalloffExponentUpdated()
```

### **FogHeightEndUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L57)

```csharp
void FogHeightEndUpdated()
```

### **FogHeightExponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L59)

```csharp
void FogHeightExponentUpdated()
```

### **FogHeightStartUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L58)

```csharp
void FogHeightStartUpdated()
```

### **FogHeightWidthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L56)

```csharp
void FogHeightWidthUpdated()
```

### **FogMaxOpacityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L63)

```csharp
void FogMaxOpacityUpdated()
```

### **HasHeightFogEndUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L68)

```csharp
void HasHeightFogEndUpdated()
```

### **HeightFogEnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L55)

```csharp
void HeightFogEnabledUpdated()
```

### **LODBiasUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L60)

```csharp
void LODBiasUpdated()
```

### **SkyEntityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L66)

```csharp
void SkyEntityUpdated()
```

### **SkyMaterialUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L65)

```csharp
void SkyMaterialUpdated()
```

### **StartDisabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L62)

```csharp
void StartDisabledUpdated()
```

### **StartDistanceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvCubemapFog.cs#L53)

```csharp
void StartDistanceUpdated()
```

