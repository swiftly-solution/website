---
title: CVoiceContainerLoopTrigger
---

# Interface CVoiceContainerLoopTrigger

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CVoiceContainerLoopTrigger : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerLoopTrigger>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CVoiceContainerBase](/docs/api/schemadefinitions/cvoicecontainerbase)
- [ISchemaClass<CVoiceContainerBase>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CVoiceContainerLoopTrigger>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### CrossFade

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L26)

```csharp
ref bool CrossFade { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FadeTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L24)

```csharp
ref float FadeTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RetriggerTimeMax

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L22)

```csharp
ref float RetriggerTimeMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### RetriggerTimeMin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L20)

```csharp
ref float RetriggerTimeMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Sound

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerLoopTrigger.cs#L18)

```csharp
CSoundContainerReference Sound { get; }
```

#### Property Value

- [CSoundContainerReference](/docs/api/schemadefinitions/csoundcontainerreference)

