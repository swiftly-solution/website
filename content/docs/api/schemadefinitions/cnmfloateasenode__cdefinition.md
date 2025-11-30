---
title: CNmFloatEaseNode__CDefinition
---

# Interface CNmFloatEaseNode__CDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatEaseNode__CDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmFloatEaseNode__CDefinition : CNmFloatValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmFloatValueNode__CDefinition>, ISchemaClass<CNmFloatEaseNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmFloatValueNode__CDefinition](/docs/api/schemadefinitions/cnmfloatvaluenode__cdefinition)
- [CNmValueNode__CDefinition](/docs/api/schemadefinitions/cnmvaluenode__cdefinition)
- [CNmGraphNode__CDefinition](/docs/api/schemadefinitions/cnmgraphnode__cdefinition)
- [ISchemaClass<CNmGraphNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmFloatValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmFloatEaseNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### EaseTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatEaseNode__CDefinition.cs#L18)

```csharp
ref float EaseTime { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EasingOp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatEaseNode__CDefinition.cs#L24)

```csharp
ref NmEasingOperation_t EasingOp { get; }
```

#### Property Value

- [NmEasingOperation_t](/docs/api/schemadefinitions/nmeasingoperation_t)

### InputValueNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatEaseNode__CDefinition.cs#L22)

```csharp
ref short InputValueNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### StartValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatEaseNode__CDefinition.cs#L20)

```csharp
ref float StartValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### UseStartValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatEaseNode__CDefinition.cs#L26)

```csharp
ref bool UseStartValue { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

