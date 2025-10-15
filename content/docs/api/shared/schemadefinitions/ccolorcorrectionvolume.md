---
title: CColorCorrectionVolume
---

```csharp
public interface CColorCorrectionVolume : CBaseTrigger, CBaseToggle, CBaseModelEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CBaseModelEntity>, ISchemaClass<CBaseToggle>, ISchemaClass<CBaseTrigger>, ISchemaClass<CColorCorrectionVolume>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### FadeDuration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L19)

```csharp
ref float FadeDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastEnterTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L27)

```csharp
GameTime_t LastEnterTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastEnterWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L25)

```csharp
ref float LastEnterWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LastExitTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L31)

```csharp
GameTime_t LastExitTime { get; }
```

#### Property Value

- [GameTime_t](/docs/api/shared/schemadefinitions/gametime_t)

### LastExitWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L29)

```csharp
ref float LastExitWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### LookupFilename

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L23)

```csharp
string LookupFilename { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### MaxWeight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L17)

```csharp
ref float MaxWeight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Weight

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L21)

```csharp
ref float Weight { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### FadeDurationUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L34)

```csharp
void FadeDurationUpdated()
```

### LookupFilenameUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L36)

```csharp
void LookupFilenameUpdated()
```

### MaxWeightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L33)

```csharp
void MaxWeightUpdated()
```

### WeightUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CColorCorrectionVolume.cs#L35)

```csharp
void WeightUpdated()
```

