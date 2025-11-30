---
title: CPulseCell_Step_CallExternalMethod
---

# Interface CPulseCell_Step_CallExternalMethod

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseCell_Step_CallExternalMethod : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Step_CallExternalMethod>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseCell_BaseYieldingInflow](/docs/api/schemadefinitions/cpulsecell_baseyieldinginflow)
- [CPulseCell_BaseFlow](/docs/api/schemadefinitions/cpulsecell_baseflow)
- [CPulseCell_Base](/docs/api/schemadefinitions/cpulsecell_base)
- [ISchemaClass<CPulseCell_Base>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseFlow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseYieldingInflow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_Step_CallExternalMethod>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AsyncCallMode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L26)

```csharp
ref PulseMethodCallMode_t AsyncCallMode { get; }
```

#### Property Value

- [PulseMethodCallMode_t](/docs/api/schemadefinitions/pulsemethodcallmode_t)

### ExpectedArgs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L24)

```csharp
ref CUtlLeanVector<CPulseRuntimeMethodArg, int> ExpectedArgs { get; }
```

#### Property Value

- [CUtlLeanVector](/docs/api/natives/cutlleanvectortt)<[CPulseRuntimeMethodArg](/docs/api/schemadefinitions/cpulseruntimemethodarg), [int](https://learn.microsoft.com/dotnet/api/system.int32)>

### GameBlackboard

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L22)

```csharp
SchemaUntypedField GameBlackboard { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### MethodName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L19)

```csharp
SchemaUntypedField MethodName { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/schemas/schemauntypedfield)

### OnFinished

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Step_CallExternalMethod.cs#L28)

```csharp
CPulse_ResumePoint OnFinished { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/schemadefinitions/cpulse_resumepoint)

