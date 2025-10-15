---
title: CVoiceContainerRandomSampler
---

```csharp
public interface CVoiceContainerRandomSampler : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerRandomSampler>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Amplitude

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerRandomSampler.cs#L17)

```csharp
ref float Amplitude { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### AmplitudeJitter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerRandomSampler.cs#L19)

```csharp
ref float AmplitudeJitter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GrainResources

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerRandomSampler.cs#L27)

```csharp
ref CUtlVector<CStrongHandle<InfoForResourceTypeCVoiceContainerBase>> GrainResources { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/shared/schemadefinitions/infoforresourcetypecvoicecontainerbase)>>

### MaxLength

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerRandomSampler.cs#L23)

```csharp
ref float MaxLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### NumDelayVariations

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerRandomSampler.cs#L25)

```csharp
ref int NumDelayVariations { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TimeJitter

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerRandomSampler.cs#L21)

```csharp
ref float TimeJitter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

