---
title: CVoiceContainerBlender
---

```csharp
public interface CVoiceContainerBlender : CVoiceContainerBase, ISchemaClass<CVoiceContainerBase>, ISchemaClass<CVoiceContainerBlender>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BlendFactor

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerBlender.cs#L22)

```csharp
ref float BlendFactor { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FirstSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerBlender.cs#L18)

```csharp
CSoundContainerReference FirstSound { get; }
```

#### Property Value

- [CSoundContainerReference](/docs/api/shared/schemadefinitions/csoundcontainerreference)

### SecondSound

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CVoiceContainerBlender.cs#L20)

```csharp
CSoundContainerReference SecondSound { get; }
```

#### Property Value

- [CSoundContainerReference](/docs/api/shared/schemadefinitions/csoundcontainerreference)

