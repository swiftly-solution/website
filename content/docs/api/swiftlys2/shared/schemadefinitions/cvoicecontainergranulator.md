---
title: CVoiceContainerGranulator
---

```csharp
public interface CVoiceContainerGranulator : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerGranulator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**GrainCrossfadeAmount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L18)

```csharp
ref float GrainCrossfadeAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**GrainLength** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L16)

```csharp
ref float GrainLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**PlaybackJitter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L22)

```csharp
ref float PlaybackJitter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**ShouldWraparound** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L24)

```csharp
ref bool ShouldWraparound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**SourceAudio** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L26)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> SourceAudio { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/shared/natives/cstronghandle-1)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/shared/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

**StartJitter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L20)

```csharp
ref float StartJitter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

