---
title: CGradientFog
---

```csharp
public interface CGradientFog : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CGradientFog>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **FadeTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L40)

```csharp
ref float FadeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FarZ** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L28)

```csharp
ref float FarZ { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogColor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L36)

```csharp
ref Color FogColor { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### **FogEndDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L20)

```csharp
ref float FogEndDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogEndHeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L26)

```csharp
ref float FogEndHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogFalloffExponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L32)

```csharp
ref float FogFalloffExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogMaxOpacity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L30)

```csharp
ref float FogMaxOpacity { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogStartDistance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L18)

```csharp
ref float FogStartDistance { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogStartHeight** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L24)

```csharp
ref float FogStartHeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogStrength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L38)

```csharp
ref float FogStrength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **FogVerticalExponent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L34)

```csharp
ref float FogVerticalExponent { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **GradientFogNeedsTextures** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L46)

```csharp
ref bool GradientFogNeedsTextures { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **GradientFogTexture** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L16)

```csharp
ref CStrongHandle<InfoForResourceTypeCTextureBase> GradientFogTexture { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCTextureBase](/docs/api/shared/schemadefinitions/infoforresourcetypectexturebase)>

### **HeightFogEnabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L22)

```csharp
ref bool HeightFogEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsEnabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L44)

```csharp
ref bool IsEnabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **StartDisabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L42)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **FadeTimeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L60)

```csharp
void FadeTimeUpdated()
```

### **FarZUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L54)

```csharp
void FarZUpdated()
```

### **FogColorUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L58)

```csharp
void FogColorUpdated()
```

### **FogEndDistanceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L50)

```csharp
void FogEndDistanceUpdated()
```

### **FogEndHeightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L53)

```csharp
void FogEndHeightUpdated()
```

### **FogFalloffExponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L56)

```csharp
void FogFalloffExponentUpdated()
```

### **FogMaxOpacityUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L55)

```csharp
void FogMaxOpacityUpdated()
```

### **FogStartDistanceUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L49)

```csharp
void FogStartDistanceUpdated()
```

### **FogStartHeightUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L52)

```csharp
void FogStartHeightUpdated()
```

### **FogStrengthUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L59)

```csharp
void FogStrengthUpdated()
```

### **FogVerticalExponentUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L57)

```csharp
void FogVerticalExponentUpdated()
```

### **GradientFogTextureUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L48)

```csharp
void GradientFogTextureUpdated()
```

### **HeightFogEnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L51)

```csharp
void HeightFogEnabledUpdated()
```

### **IsEnabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L62)

```csharp
void IsEnabledUpdated()
```

### **StartDisabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CGradientFog.cs#L61)

```csharp
void StartDisabledUpdated()
```

