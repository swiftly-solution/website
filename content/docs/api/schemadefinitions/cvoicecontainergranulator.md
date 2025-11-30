---
title: CVoiceContainerGranulator
---

# Interface CVoiceContainerGranulator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVoiceContainerGranulator : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerGranulator>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CVoiceContainerBase](/docs/api/schemadefinitions/cvoicecontainerbase)
- [ISchemaClass<CVoiceContainerBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CVoiceContainerGranulator>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### GrainCrossfadeAmount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L20)

```csharp
ref float GrainCrossfadeAmount { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### GrainLength

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L18)

```csharp
ref float GrainLength { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### PlaybackJitter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L24)

```csharp
ref float PlaybackJitter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### ShouldWraparound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L26)

```csharp
ref bool ShouldWraparound { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SourceAudio

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L28)

```csharp
ref CStrongHandle<InfoForResourceTypeCVoiceContainerBase> SourceAudio { get; }
```

#### Property Value

- [CStrongHandle](/docs/api/natives/cstronghandlet)<[InfoForResourceTypeCVoiceContainerBase](/docs/api/schemadefinitions/infoforresourcetypecvoicecontainerbase)>

### StartJitter

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerGranulator.cs#L22)

```csharp
ref float StartJitter { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

