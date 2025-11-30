---
title: CPulseCell_Outflow_ListenForEntityOutput
---

# Interface CPulseCell_Outflow_ListenForEntityOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CPulseCell_Outflow_ListenForEntityOutput : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Outflow_ListenForEntityOutput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CPulseCell_BaseYieldingInflow](/docs/api/schemadefinitions/cpulsecell_baseyieldinginflow)
- [CPulseCell_BaseFlow](/docs/api/schemadefinitions/cpulsecell_baseflow)
- [CPulseCell_Base](/docs/api/schemadefinitions/cpulsecell_base)
- [ISchemaClass<CPulseCell_Base>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseFlow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_BaseYieldingInflow>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CPulseCell_Outflow_ListenForEntityOutput>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ListenUntilCanceled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L26)

```csharp
ref bool ListenUntilCanceled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OnCanceled

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L20)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/schemadefinitions/cpulse_resumepoint)

### OnFired

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L18)

```csharp
SignatureOutflow_Resume OnFired { get; }
```

#### Property Value

- [SignatureOutflow_Resume](/docs/api/schemadefinitions/signatureoutflow_resume)

### StrEntityOutput

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L22)

```csharp
ref CGlobalSymbol StrEntityOutput { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

### StrEntityOutputParam

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L24)

```csharp
string StrEntityOutputParam { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

