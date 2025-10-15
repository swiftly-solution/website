---
title: CEnvSky
---

```csharp
public interface CEnvSky : CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CEnvSky>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BrightnessScale

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L27)

```csharp
ref float BrightnessScale { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L39)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FogMaxEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L37)

```csharp
ref float FogMaxEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogMaxStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L35)

```csharp
ref float FogMaxStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogMinEnd

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L33)

```csharp
ref float FogMinEnd { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogMinStart

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L31)

```csharp
ref float FogMinStart { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FogType

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L29)

```csharp
ref int FogType { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SkyMaterial

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L17)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SkyMaterial { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### SkyMaterialLightingOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L19)

```csharp
ref CStrongHandle<InfoForResourceTypeIMaterial2> SkyMaterialLightingOnly { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeIMaterial2](/docs/api/shared/schemadefinitions/infoforresourcetypeimaterial2)>

### StartDisabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L21)

```csharp
ref bool StartDisabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TintColor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L23)

```csharp
ref Color TintColor { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

### TintColorLightingOnly

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L25)

```csharp
ref Color TintColorLightingOnly { get; }
```

#### Property Value

- [Color](/docs/api/shared/natives/color)

## Methods

### BrightnessScaleUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L46)

```csharp
void BrightnessScaleUpdated()
```

### EnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L52)

```csharp
void EnabledUpdated()
```

### FogMaxEndUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L51)

```csharp
void FogMaxEndUpdated()
```

### FogMaxStartUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L50)

```csharp
void FogMaxStartUpdated()
```

### FogMinEndUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L49)

```csharp
void FogMinEndUpdated()
```

### FogMinStartUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L48)

```csharp
void FogMinStartUpdated()
```

### FogTypeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L47)

```csharp
void FogTypeUpdated()
```

### SkyMaterialLightingOnlyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L42)

```csharp
void SkyMaterialLightingOnlyUpdated()
```

### SkyMaterialUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L41)

```csharp
void SkyMaterialUpdated()
```

### StartDisabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L43)

```csharp
void StartDisabledUpdated()
```

### TintColorLightingOnlyUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L45)

```csharp
void TintColorLightingOnlyUpdated()
```

### TintColorUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvSky.cs#L44)

```csharp
void TintColorUpdated()
```

