---
title: CPostProcessingVolume
---

```csharp
public interface CPostProcessingVolume : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CPostProcessingVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ExposureCompensation

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L29)

```csharp
ref float ExposureCompensation { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ExposureControl

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L39)

```csharp
ref bool ExposureControl { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExposureFadeSpeedDown

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L33)

```csharp
ref float ExposureFadeSpeedDown { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ExposureFadeSpeedUp

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L31)

```csharp
ref float ExposureFadeSpeedUp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FadeDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L19)

```csharp
ref float FadeDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Master

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L37)

```csharp
ref bool Master { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxExposure

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L27)

```csharp
ref float MaxExposure { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MaxLogExposure

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L23)

```csharp
ref float MaxLogExposure { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinExposure

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L25)

```csharp
ref float MinExposure { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### MinLogExposure

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L21)

```csharp
ref float MinLogExposure { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PostSettings

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L17)

```csharp
ref CStrongHandle<InfoForResourceTypeCPostProcessingResource> PostSettings { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCPostProcessingResource](/docs/api/shared/schemadefinitions/infoforresourcetypecpostprocessingresource)>

### TonemapEVSmoothingRange

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L35)

```csharp
ref float TonemapEVSmoothingRange { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### ExposureCompensationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L47)

```csharp
void ExposureCompensationUpdated()
```

### ExposureControlUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L52)

```csharp
void ExposureControlUpdated()
```

### ExposureFadeSpeedDownUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L49)

```csharp
void ExposureFadeSpeedDownUpdated()
```

### ExposureFadeSpeedUpUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L48)

```csharp
void ExposureFadeSpeedUpUpdated()
```

### FadeDurationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L42)

```csharp
void FadeDurationUpdated()
```

### MasterUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L51)

```csharp
void MasterUpdated()
```

### MaxExposureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L46)

```csharp
void MaxExposureUpdated()
```

### MaxLogExposureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L44)

```csharp
void MaxLogExposureUpdated()
```

### MinExposureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L45)

```csharp
void MinExposureUpdated()
```

### MinLogExposureUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L43)

```csharp
void MinLogExposureUpdated()
```

### PostSettingsUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L41)

```csharp
void PostSettingsUpdated()
```

### TonemapEVSmoothingRangeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPostProcessingVolume.cs#L50)

```csharp
void TonemapEVSmoothingRangeUpdated()
```

