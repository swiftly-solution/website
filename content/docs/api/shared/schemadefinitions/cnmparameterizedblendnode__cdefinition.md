---
title: CNmParameterizedBlendNode__CDefinition
---

```csharp
public interface CNmParameterizedBlendNode__CDefinition : CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmParameterizedBlendNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### AllowLooping

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParameterizedBlendNode__CDefinition.cs#L22)

```csharp
ref bool AllowLooping { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InputParameterValueNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParameterizedBlendNode__CDefinition.cs#L20)

```csharp
ref short InputParameterValueNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### SourceNodeIndices

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmParameterizedBlendNode__CDefinition.cs#L18)

```csharp
SchemaUntypedField SourceNodeIndices { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

