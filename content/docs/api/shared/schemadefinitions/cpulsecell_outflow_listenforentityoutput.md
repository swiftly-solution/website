---
title: CPulseCell_Outflow_ListenForEntityOutput
---

```csharp
public interface CPulseCell_Outflow_ListenForEntityOutput : CPulseCell_BaseYieldingInflow, CPulseCell_BaseFlow, CPulseCell_Base, ISchemaClass<CPulseCell_Base>, ISchemaClass<CPulseCell_BaseFlow>, ISchemaClass<CPulseCell_BaseYieldingInflow>, ISchemaClass<CPulseCell_Outflow_ListenForEntityOutput>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**ListenUntilCanceled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L24)

```csharp
ref bool ListenUntilCanceled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

**OnCanceled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L18)

```csharp
CPulse_ResumePoint OnCanceled { get; }
```

#### Property Value

- [CPulse_ResumePoint](/docs/api/shared/schemadefinitions/cpulse_resumepoint)

**OnFired** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L16)

```csharp
SignatureOutflow_Resume OnFired { get; }
```

#### Property Value

- [SignatureOutflow_Resume](/docs/api/shared/schemadefinitions/signatureoutflow_resume)

**StrEntityOutput** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L20)

```csharp
ref CGlobalSymbol StrEntityOutput { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

**StrEntityOutputParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPulseCell_Outflow_ListenForEntityOutput.cs#L22)

```csharp
ref CUtlString StrEntityOutputParam { get; }
```

#### Property Value

- [CUtlString](/docs/api/shared/natives/cutlstring)

